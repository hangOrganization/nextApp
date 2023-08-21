import classnames from "classnames";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
interface Props {
  src?: any;
  alt?: any;
  classname?: any;
}
export default function LazyLoadImg(props: Props) {
  const { src, alt, classname } = props;
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const imgRef = useRef<any>(null);
  const onLoad = () => {
    setLoading(false);
    setErr(false);
    console.log(123);
  };
  const onError = () => {
    setLoading(false);
    setErr(true);
    console.log(123);
  };
  useEffect(() => {
    // 监听图片
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        console.log(imgRef.current.src);
        // 图片在可视区
        imgRef.current.src = imgRef.current.dataset.src;
        console.log(imgRef.current.src, "111111111111111");
        // 取消监听
        observer.unobserve(imgRef.current);
      }
    });
    observer.observe(imgRef.current);
  }, []);
  return (
    <div>
      {/* loading && (<div>loading</div>) (!loading&& err) && (<div>error</div>
      ) */}
      <img />
      <Image
        className={classname}
        alt={alt}
        ref={imgRef}
        src={src}
        data-src={src}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
}
