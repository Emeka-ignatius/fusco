import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

export async function GET() {
  try {
    // Path to the PDF file in the lib folder
    const filePath = join(process.cwd(), "lib", "IgnatiusEmeka.pdf")
    
    // Read the file
    const fileBuffer = await readFile(filePath)
    
    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="IgnatiusEmeka_CV.pdf"',
        "Content-Length": fileBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("Error serving CV:", error)
    return new NextResponse("CV not found", { status: 404 })
  }
}
