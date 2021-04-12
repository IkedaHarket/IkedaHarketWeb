
export const fileUpload = async (file) =>{
    const cloudUrl = 'https://api.cloudinary.com/v1_1/de9ty2vgh/upload';

    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file',file);
    try {
        const resp = await fetch(cloudUrl,{
            method:'POST',
            body:formData
        });
        if(!resp.ok) throw await resp.json();

        const cloudResp = await resp.json();
        return cloudResp.secure_url;
        
    } catch (error) {
        console.log(error)
    }
}