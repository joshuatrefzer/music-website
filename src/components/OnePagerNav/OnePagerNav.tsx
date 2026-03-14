export interface OnePagerNavProp {
    id: string;
    label: string;
}

interface OnePagerNavProps {
    links: OnePagerNavProp[];
}

export default function OnePagerNav(props: OnePagerNavProps) {
    return (
        <div class="one-pager-navigation mt-50">
            {props.links.map(link => (
                <a class="link" href={`#${link.id}`}>{link.label}</a>
            ))}
        </div>
    );
}