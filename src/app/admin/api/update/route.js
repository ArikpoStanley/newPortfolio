import Projects from "@/models/Projects";
import dbConnect from "@/lib/dbConnect";
import { put } from '@vercel/blob';
import { usePresenceData } from "framer-motion";

export async function POST(req) {
  await dbConnect();

  const formData = await req.formData();
  const file = formData.get('image');
  const entries = Object.fromEntries(formData.entries());
  const { id } = entries;

  if (!id) {
    return Response.json({ message: 'Project ID is required' }, { status: 400 });
  }

  try {
    const updateData = {};

    // If there's a file, upload and include the URL in updateData
    if (file && typeof file === 'object' && file.name) {
      const blob = await put(file.name, file, {
        access: 'public',
      });
      updateData.image = blob.url;
    }

    // Add other fields conditionally
    const allowedFields = ['url', 'title', 'githubLink', 'status', 'description'];
    for (const field of allowedFields) {
      if (entries[field] !== undefined) {  // <- FIXED
        updateData[field] = entries[field];
      }
    }

    console.log(updateData)

    const updatedProject = await Projects.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true }
    );

    if (!updatedProject) {
      return Response.json({ message: 'Project not found' }, { status: 404 });
    }

    return Response.json(
      {
        message: 'Project updated successfully',
        project: updatedProject,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating project:', error);
    return Response.json({ message: 'Server Error' }, { status: 500 });
  }
}
