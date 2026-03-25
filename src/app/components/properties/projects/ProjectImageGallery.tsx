"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type ProjectImageGalleryProps = {
  images: { src: string }[];
  projectName: string;
};

const imageSlots = [
  "lg:col-span-8 col-span-12 row-span-2",
  "lg:col-span-4 lg:block hidden",
  "lg:col-span-2 sm:col-span-6 col-span-12",
  "lg:col-span-2 sm:col-span-6 col-span-12",
];

const imageHeights = [
  "h-[260px] xs:h-[320px] sm:h-[420px] lg:h-[540px]",
  "h-[335px]",
  "h-[140px] xs:h-[155px]",
  "h-[140px] xs:h-[155px]",
];

export default function ProjectImageGallery({
  images,
  projectName,
}: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (images.length < 2) {
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % images.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? images.length - 1
            : (current - 1 + images.length) % images.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  const openImage = (index: number) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);
  const showPrevious = () =>
    setActiveIndex((current) =>
      current === null ? 0 : (current - 1 + images.length) % images.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % images.length,
    );

  return (
    <>
      <div
        className="mt-6 grid grid-cols-12 gap-4 sm:mt-8 sm:gap-8"
        data-oid="ezbw0bb"
      >
        {images.slice(0, 4).map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openImage(index)}
            className={`${imageSlots[index]} ${imageHeights[index]} group relative w-full overflow-hidden rounded-2xl text-left`}
            aria-label={`Открыть изображение ${index + 1} проекта ${projectName}`}
            data-oid="3dmaz75"
          >
            <Image
              src={image.src}
              alt={`${projectName} — фото проекта ${index + 1}`}
              width={1600}
              height={1200}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              priority={index === 0}
              sizes={
                index === 0
                  ? "(max-width: 1024px) 100vw, 66vw"
                  : index === 1
                    ? "33vw"
                    : "(max-width: 1024px) 50vw, 16vw"
              }
              data-oid="pd4g7dg"
            />

            <span
              className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/15"
              data-oid="4g3_ovd"
            />

            <span
              className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-dark opacity-0 transition group-hover:opacity-100"
              data-oid="u_zf-j_"
            >
              <Icon
                icon="ph:magnifying-glass-plus"
                width={18}
                height={18}
                data-oid="tcvfo6z"
              />
              Открыть
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && images[activeIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Просмотр проекта ${projectName}`}
          onClick={closeImage}
          data-oid="2xr3-9n"
        >
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Закрыть просмотр"
            data-oid="0-svvb-"
          >
            <Icon icon="ph:x" width={24} height={24} data-oid="8adcrdc" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Предыдущее изображение"
                data-oid="vi9vnn_"
              >
                <Icon
                  icon="ph:caret-left-bold"
                  width={20}
                  height={20}
                  data-oid="vjhyud9"
                />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Следующее изображение"
                data-oid="sjxai79"
              >
                <Icon
                  icon="ph:caret-right-bold"
                  width={20}
                  height={20}
                  data-oid="e3fez:q"
                />
              </button>
            </>
          )}

          <div
            className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            data-oid="l2howr1"
          >
            <Image
              src={images[activeIndex].src}
              alt={`${projectName} — полноразмерное изображение ${activeIndex + 1}`}
              width={2200}
              height={1600}
              className="max-h-full w-auto max-w-full rounded-2xl object-contain"
              priority
              data-oid=":o8fux."
            />
          </div>
        </div>
      )}
    </>
  );
}
