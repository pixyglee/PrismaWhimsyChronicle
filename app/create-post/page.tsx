import CreatePostForm from "@/components/CreatePostForm"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"


export default async function CreatePost() {


    const session = await getServerSession(authOptions);
    console.log(session);

    if (!session) {
        redirect("/sign-in")
    }
    return (
        <div>
            <CreatePostForm />
        </div>
    )
}