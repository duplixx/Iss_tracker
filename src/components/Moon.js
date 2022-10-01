import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Moon(props) {
  const { nodes, materials } = useGLTF('moon.gltf')
  return (
    <>    
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} />
            </group>
          </group>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/moon.gltf')
