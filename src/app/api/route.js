import { createClient } from '@supabase/supabase-js'
import { auth } from "../../../auth";


export async function GET(){
    const supabase = createClient(process.env.DB_URL, process.env.DB_KEY)
    const { data, error } = await supabase
    .from('books')
    .select()
    return Response.json(data)
}

export async function POST(request){
    const session = await auth()
    if (!session?.user?.name){
        return Response.json({"ret": "error"})
    }
    const supabase = createClient(process.env.DB_URL, process.env.DB_KEY)
    var request = await request
    var req = await request.json()
    console.log(req)
    var title = await req.title
    var desc = await req.desc
    const { error } = await supabase
    .from('books')
    .insert({ title: title, desc: desc })
    console.log(error)
    return Response.json({})
}

export async function DELETE(request){
    const session = await auth()
    if (!session?.user?.name){
        return Response.json({"ret": "error"})
    }
    const supabase = createClient(process.env.DB_URL, process.env.DB_KEY)
    var request = await request
    var req = await request.json()
    console.log(req)
    var created_at = await req.created_at
    const { error } = await supabase
    .from('books')
    .delete()
    .eq("created_at", created_at)
    console.log(error)
    return Response.json({})
}