export const catAssets = [
    {
        side:"left",
        triggerZoneX: 350, 
        triggerZoneYmin: 400,
        triggerZoneYmax: 600,
        swipeZone: 200,
        containerClass: "fixed left-[calc(60px)] w-64 overflow-visible h-[35rem] bottom-20 hidden lg:block", // Explicit left position
        catArm: {
            src: "/fancy-arm.png",
            width: 400,
            height: 400,
            class: "absolute w-48",
            initial: { rotate: 0, x: '-30%', y: '30%' }, // Move it further left
            animate: { rotate: [0, 20, 0], x: ['-50%', '-75%', '-95%'] },
            transition: { duration: 0.25, ease: 'easeInOut' }
        },
        catHead: {
            src: "/fancy-head.png",
            width: 400,
            height: 400,
            class: "absolute w-48",
            initial: { x: '-30%' }, // Move it further left
            animate: { x1: '-85%', x2: '-120%', y1: 60, y2: 0 },
            transition: { type: 'spring', stiffness: 100 }
        }
    },
    {
        side:"right",
        triggerZoneX: 350, 
        triggerZoneYmin: 400,
        triggerZoneYmax: 600,
        swipeZone: 200,
        containerClass: "fixed right-0 w-64 overflow-visible h-[35rem] bottom-20 hidden lg:block",
        catArm: {
            src: "/cat-arm.png",
            width: 400,
            height: 400,
            class: "absolute w-48",
            initial: { rotate: 0, x: '100%', y: '20%' },
            animate: { rotate: [0, -20, 0], x: ['50%', '75%', '95%'] },
            transition: { duration: 0.25, ease: 'easeInOut' }
        },
        catHead: {
            src: "/cat-head.png",
            width: 400,
            height: 400,
            class: "absolute w-48",
            initial: { x: '120%' },
            animate: { x1: '85%', x2: '120%', y1: 40 - 5, y2: 0 },
            transition: { type: 'spring', stiffness: 100 }
        }
    }
];

export interface CatInterface {
    side: string,
    triggerZoneX: number;
    triggerZoneYmin: number;
    triggerZoneYmax: number;
    swipeZone: number;
    containerClass: string;
    catArm: {
        src: string;
        width: number;
        height: number;
        class: string;
        initial: {
            rotate: number;
            x: string;
            y: string;
        };
        animate: {
            rotate: number[];
            x: string[];
        };
        transition: {
            duration: number;
            ease: string;
        };
    };
    catHead: {
        src: string;
        width: number;
        height: number;
        class: string;
        initial: {
            x: string;
        };
        animate: {
            x1: string;
            x2: string;
            y1: number;
            y2: number;
        };
        transition: {
            type: string;
            stiffness: number;
        };
    };
}

