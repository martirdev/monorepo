import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/ui/components/dialog";

type PreviewImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function PreviewImage({ src, alt, className }: PreviewImageProps) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        <img src={src} alt={alt} className={className} />
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <div className="relative h-[calc(100vh-100px)] w-full overflow-clip rounded-md bg-white shadow-md py-10">
          <img src={src} alt={alt} className="h-full w-full object-contain" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
