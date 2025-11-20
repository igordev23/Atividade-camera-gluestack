import { useState, useEffect } from "react";
import { photoRepository } from "../model/repositories/PhotoRepository";
import { MyPhoto } from "../model/entities/MyPhoto";

export function useGaleryViewModel() {
    const [photos, setPhotos] = useState<MyPhoto[]>([]);
    const [selectedPhoto, setSelectedPhoto] = useState<MyPhoto | null>(null);

    useEffect(() => {
        setPhotos(photoRepository.getAll());
    }, []);

    const deletePhoto = (uri: string) => {
        photoRepository.delete(uri);
        setPhotos(photoRepository.getAll());
    };

    const openPhoto = (photo: MyPhoto) => setSelectedPhoto(photo);
    const closePhoto = () => setSelectedPhoto(null);

    return {
        photos,
        selectedPhoto,
        openPhoto,
        closePhoto,
        deletePhoto
    };
}
