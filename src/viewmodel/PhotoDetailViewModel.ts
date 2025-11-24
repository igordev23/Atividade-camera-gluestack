import { useState } from "react";
import { MyPhoto } from "../model/entities/MyPhoto";

export const usePhotoDetailViewModel = (initialPhoto: MyPhoto | null) => {
    const [photo, setPhoto] = useState<MyPhoto | null>(initialPhoto);

    const updatePhoto = (newPhoto: MyPhoto) => {
        setPhoto(newPhoto);
    };

    return {
        photo,
        updatePhoto,
    };
};
