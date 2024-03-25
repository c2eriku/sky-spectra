import { SkyMapInfo } from "./SkyMap.model";
import { bfiInfo } from "./bfiDimension.enum";

interface IdentityDataset {
    bfiInfo: any,
    mapName: string,
    mapBrief: string,
    mapIcon: string,
    mapDescription: string,
    bgImage: string,
    themeColor: string,
}

const prairieSet: any = {
    skyMapInfo: SkyMapInfo.prairie,
    bfiInfo: bfiInfo.openness,
}

const forestSet: any = {
    skyMapInfo: SkyMapInfo.forest,
    bfiInfo: bfiInfo.neuroticism,
}

const valleySet: any = {
    skyMapInfo: SkyMapInfo.valley,
    bfiInfo: bfiInfo.extraversion,
}

const wastelandSet: any = {
    skyMapInfo: SkyMapInfo.wasteland,
    bfiInfo: bfiInfo.conscientiousness,
}

const vaultSet: any = {
    skyMapInfo: SkyMapInfo.vault,
    bfiInfo: bfiInfo.agreeableness,
}

export function getIdentityDataset(str: string): any {
    if (str === 'prairie') return prairieSet;
    if (str === 'forest') return forestSet;
    if (str === 'valley') return valleySet;
    if (str === 'wasteland') return wastelandSet;
    if (str === 'vault') return vaultSet;
    return vaultSet;
}

