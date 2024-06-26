"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";
import { CloudDownload, File } from "lucide-react";
import { Progress } from "./ui/progress";
import { resolve } from "path";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        <UploadDropZone />
      </DialogContent>
    </Dialog>
  );
};

const UploadDropZone = () => {
  const [isUploading, setIsUploading] = useState<boolean>(true);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);
    return interval;
  };

  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFiles) => {
        setIsUploading(true);

        const progressInterval = startSimulatedProgress();

        // handle file uploading
        await new Promise((resolve) => setTimeout(resolve, 5000))

        clearInterval(progressInterval);
        setUploadProgress(100);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="h-64 m-4 border border-dashed border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center w-full h-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <CloudDownload className="h-8 w-8 text-zinc-500 mb-2" />
                <input {...getInputProps()} />
                <p className="text-sm mb-2 text-zinc-700">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop file.
                </p>
                <p className="text-xs text-zinc-500">PDF (up to 4mb)</p>
              </div>

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs flex items-center bg-white rounded-md overflow-hidden outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <File className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              {isUploading ? (
                <div className="w-full mt-4 max-w-xs mx-auto">
                  <Progress value={uploadProgress} className="h-1 w-full bg-zinc-200" />
                </div>
              ) : null}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default UploadButton;
