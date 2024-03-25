import IdentifyResultStaticPage from "./IdentityResultStaticPage";
import { Suspense } from 'react';

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
  return <Suspense>
    <IdentifyResultStaticPage identityResult={params.identityResult}></IdentifyResultStaticPage>
  </Suspense>
}