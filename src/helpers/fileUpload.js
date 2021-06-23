export const fileUpload = async (file) => {
    const cloud_url = 'https://api.cloudinary.com/v1_1/deg3vlk1d/upload';
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'react-journal');
    
    try {
        const resp = await fetch(cloud_url, {
            method: 'POST',
            body: form
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    } catch (error) {
        console.log('error',error);
    }
}