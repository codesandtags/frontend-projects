import { useState } from "react";

export type File = {
  id: string;
  name: string;
};

export type FolderType = {
  id: string;
  name: string;
  isOpen: boolean;
  files: File[];
  subFolders: FolderType[];
};

export type FolderProps = {
  folder: FolderType;
};

import "./Folder.css";

export default function Folder({ folder }: FolderProps) {
  const [isOpen, setIsOpen] = useState(folder.isOpen);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  const folderIcon = isOpen ? "📂" : "📁";
  const fileIcon = "📄";

  return (
    <div>
      <div className="folder" onClick={toggleFolder} tabIndex={0}>
        {folderIcon} {folder.name}
      </div>
      {isOpen && (
        <div style={{ paddingLeft: "20px" }}>
          {folder.subFolders.map((subFolder) => (
            <Folder key={subFolder.id} folder={subFolder} />
          ))}
          {folder.files.map((file: File) => (
            <div key={file.id} className="file">
              {fileIcon} {file.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
