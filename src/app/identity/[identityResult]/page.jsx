import IdentifyResultStaticPage from "./IdentityResultStaticPage";

export async function generateStaticParams() {
  return [
    { identityResult: 'prairie' },
    { identityResult: 'forest' },
    { identityResult: 'valley' },
    { identityResult: 'wasteland' },
    { identityResult: 'vault' },
  ];
}

export default function IdentifyResultPage({ params }) {
  return <IdentifyResultStaticPage identityResult={params.identityResult}></IdentifyResultStaticPage>
}