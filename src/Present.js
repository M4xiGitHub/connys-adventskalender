import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

import { useGLTF } from "@react-three/drei";
import { MathUtils } from "three";

export default function Present({ open, setUi }) {
    const { pos } = useSpring({ pos: open ? [0, 0.3, 0] : [0, 0, 0] });
    const { rot } = useSpring({
        rot: open ? [0, MathUtils.degToRad(180), 0] : [0, 0, 0],
    });
    const { nodes, materials } = useGLTF("Present.glb");

    const refBlock = useRef();
    const refQuestionMark = useRef();
    useFrame(() => {
        refBlock.current.rotation.y = refBlock.current.rotation.y + 0.01;
        refQuestionMark.current.rotation.y =
            refQuestionMark.current.rotation.y + 0.01;
    });

    //materials.BoxMaterial.color.set("#ff22f0")

    return (
        <group
            position={[0,-0.3,0]}
            rotation={[MathUtils.degToRad(35), MathUtils.degToRad(45), 0]}
            scale={3}
        >
            <mesh
                scale={0.15}
                geometry={nodes.Box.geometry}
                material={materials.BoxMaterial}
            />
            <animated.mesh
                scale={0.15}
                geometry={nodes.Lid.geometry}
                material={materials.BoxMaterial}
                position={pos}
                rotation={rot}
            />
            <mesh
                scale={0.15}
                geometry={nodes.RibbonBox.geometry}
                material={materials.RibbonMaterial}
            />
            <mesh
                scale={0.15}
                geometry={nodes.RibbonBox2.geometry}
                material={materials.RibbonMaterial}
            />
            <animated.mesh
                scale={0.15}
                geometry={nodes.RibbonLid.geometry}
                material={materials.RibbonMaterial}
                position={pos}
                rotation={rot}
            />
            <animated.mesh
                scale={0.15}
                geometry={nodes.RibbonLid2.geometry}
                material={materials.RibbonMaterial}
                position={pos}
                rotation={rot}
            />
            <animated.mesh
                ref={refQuestionMark}
                scale={0.15}
                geometry={nodes.Object_2.geometry}
                material={materials.RibbonMaterial}
                position={pos}
            />
            <animated.mesh
                ref={refBlock}
                scale={0.15}
                geometry={nodes.Object_1.geometry}
                material={materials.BlockMaterial}
                position={pos}
                onClick={() => setUi(true)}
            />
        </group>
    );
}
