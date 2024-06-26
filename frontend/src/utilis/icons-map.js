import * as SvgIconsComponent from '../components/icons/';

export const getIconComponentByName = (name) => {
    const ComponentsMap = {
        facebook: SvgIconsComponent.FacebookSvgrepoCom,
    }

    if (name in ComponentsMap) {
        const IconComponent = ComponentsMap[name];
        return <IconComponent />
    } else {
        return null;
    }
}