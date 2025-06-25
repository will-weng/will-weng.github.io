export interface FolderHeaderProps {
    title: string,
    color: string
}

function FolderHeader(prop: FolderHeaderProps) {

    return (
        <h1>{prop.title}</h1>
    );
}

export default FolderHeader;