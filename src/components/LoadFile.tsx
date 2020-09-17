import React, { ChangeEvent, useRef } from "react";
import { PhotoData } from "./Main";
import { ReactComponent as File } from "../images/folder-outline.svg";

type Props = {
  setPhotoHandler: (photoData: PhotoData) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const LoadFile: React.FC<Props> = (props: Props) => {
  const { setPhotoHandler, setIsLoading } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files) {
      return;
    }
    setIsLoading(true);
    const file = event.target.files[0];

    if (file.type.match("image.*")) {
      const reader = new FileReader();
      let imageSrc;

      reader.readAsDataURL(file);
      reader.onloadend = (): void => {
        imageSrc = reader.result;
        if (imageSrc && typeof imageSrc === "string") {
          setPhotoHandler({
            src: imageSrc,
          });
          setIsLoading(false);
        }
      };
    }
  };

  return (
    <div>
      <label
        htmlFor="load_file"
        className="p-3 text-xs block text-center cursor-pointer"
      >
        <File className="text-white w-6 h-6 fill-current m-auto" />
        File
        <input
          type="file"
          id="load_file"
          className="sr-only"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFile}
          capture={false}
        />
      </label>
    </div>
  );
};

export default LoadFile;
