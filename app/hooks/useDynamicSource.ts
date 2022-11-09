import { useEffect, useState } from "react";

export const useDynamicSource = (src: string, placeholder: string): string => {
  const [img, setImg] = useState(placeholder);
  useEffect(() => {
    fetch(src)
      .then(async (response) => {
        if (response.status === 200 || response.status === 201) {
          const imgSrc = URL.createObjectURL(await response.blob());
          setImg(imgSrc);
        }
      })
      .catch(() => setImg(placeholder));
  }, [placeholder, src]);
  return img;
};
