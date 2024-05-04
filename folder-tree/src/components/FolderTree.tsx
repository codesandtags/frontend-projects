import Folder, { FolderType } from "./Folder";

const initialState: {
  folders: FolderType[];
} = {
  folders: [
    {
      id: "1",
      name: "app",
      isOpen: false,
      files: [
        {
          id: "11",
          name: "app.js",
        },
      ],
      subFolders: [
        {
          id: "11",
          name: "components",
          isOpen: false,
          files: [],
          subFolders: [
            {
              id: "111",
              name: "Header",
              isOpen: false,
              files: [
                {
                  id: "1111",
                  name: "Header.js",
                },
              ],
              subFolders: [],
            },
            {
              id: "112",
              name: "Footer",
              isOpen: false,
              files: [
                {
                  id: "1121",
                  name: "Footer.js",
                },
              ],
              subFolders: [],
            },
            {
              id: "113",
              name: "Sidebar",
              isOpen: false,
              files: [
                {
                  id: "1131",
                  name: "Sidebar.js",
                },
              ],
              subFolders: [],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "public",
      isOpen: false,
      files: [
        {
          id: "21",
          name: "index.html",
        },
        {
          id: "22",
          name: "favicon.ico",
        },
      ],
      subFolders: [
        {
          id: "21",
          name: "images",
          isOpen: false,
          files: [
            {
              id: "211",
              name: "logo.png",
            },
            {
              id: "212",
              name: "profile.jpg",
            },
          ],
          subFolders: [],
        },
      ],
    },
  ],
};

export default function FolderTree() {
  return (
    <div className="container">
      <h1>Folder Tree</h1>
      <div className="folder-container">
        {initialState.folders.map((folder) => (
          <Folder key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  );
}
