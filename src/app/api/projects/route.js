import Projects from "@/models/Projects";
import dbConnect from "@/lib/dbConnect";
import { put } from '@vercel/blob';

export async function GET(request) {
    await dbConnect();
  
    try {
      const projects = await Projects.find();
      return Response.json(projects, {status: 200})
    } catch (error) {
      console.error('Unexpected error:', error);
      return Response.json({ message: 'Error fetching projects' }, {status: 500,});
    }
  }


export async function POST(req) {
    await dbConnect()

    const formData = await req.formData();
    const file = formData.get('image'); // Ensure the input name is 'file'

    if (!file) {
      return Response.json({ message: 'Image file is required' }, { status: 400 });
    }
    try {
        const blob = await put(file.name, file, {
            access: 'public', // Make image publicly accessible
          });
             
          const { url, title, githubLink, status, description } = Object.fromEntries(formData.entries());

            const project = await Projects.create({
            image: blob.url, // Save the image URL in the database
            url,
            title,
            githubLink,
            description,
            status,
            });
            return Response.json(
                {
                  message: 'Project added successfully',
                  project,
                },
                { status: 201 }
              );
        } catch (error) {
            console.error('Error creating project:', error);
            return Response.json({ message: 'Server Error' }, { status: 500 });
        }
}