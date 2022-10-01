import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Satellite(props) {
  const { nodes, materials } = useGLTF('/satellite.gltf')
  return (
    <group dispose={null} scale={[0.01,0.01,0.01]} layers={0} rotation={[30,0,-50]} enableShadow={true}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issmod_issmod_with_Tex_0.geometry} material={materials.issmod_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh919_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh918_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh917_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh916_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh915_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh914_material04_0.geometry} material={materials.material04} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh913_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh912_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh911_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh910_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh909_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh908_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh907_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh906_Material3_0.geometry} material={materials.Material3} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh905_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh904_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh903_Material3_0.geometry} material={materials.Material3} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh902_Material3_0.geometry} material={materials.Material3} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh901_material04_0.geometry} material={materials.material04} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh900_material04_0.geometry} material={materials.material04} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh899_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh898_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh897_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh896_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh895_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh894_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh893_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh892_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh891_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh890_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh889_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh888_material04_0.geometry} material={materials.material04} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh887_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh886_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh885_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh884_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh883_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh882_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh881_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh880_Material3_0.geometry} material={materials.Material3} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh879_white_0.geometry} material={materials.white} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh878_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh877_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh876_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh875_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh874_bluebg_0.geometry} material={materials.bluebg} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh873_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh872_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh871_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh870_Material1_0.geometry} material={materials.Material1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh869_bluebg_0.geometry} material={materials.bluebg} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh868_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh867_Material3_0.geometry} material={materials.Material3} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh866_Material3_0.geometry} material={materials.Material3} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh865_material04_0.geometry} material={materials.material04} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh864_material04_0.geometry} material={materials.material04} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh863_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh862_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh861_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh860_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh859_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mesh858_Material2_0.geometry} material={materials.Material2} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_isscov_isscover_with_Te_0.geometry} material={materials.isscover_with_Te} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mplm_issle_issleo_with_Tex_0.geometry} material={materials.issleo_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.mplm_issus_issusaf_with_1_0.geometry} material={materials.issusaf_with_1} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes['iss_issus1_19_-_Default_0'].geometry} material={materials['19_-_Default']} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issred_Default_0.geometry} material={materials.Default} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issku4_issusa_with_Tex_0.geometry} material={materials.issusa_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issp20_issred_with_Tex_0.geometry} material={materials.issred_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issku3_issusa_with_Tex_0.geometry} material={materials.issusa_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issp21_issred_with_Tex_0.geometry} material={materials.issred_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_iss_un_iss_un_with_Tex_0.geometry} material={materials.iss_un_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_isshan_isshand_with_Tex_0.geometry} material={materials.isshand_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issco0_isscov2_with_Tex_0.geometry} material={materials.isscov2_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_graple_graple_with_Tex_0.geometry} material={materials.graple_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_questc_questcov_with_Te_0.geometry} material={materials.questcov_with_Te} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issins_issins_with_Tex_0.geometry} material={materials.issins_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_metalc_metalcon_with_Te_0.geometry} material={materials.metalcon_with_Te} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_isscup_isscup_with_Tex_0.geometry} material={materials.isscup_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issbs__issbs_with_Tex__0.geometry} material={materials.issbs_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issesa_issesa_with_Tex_0.geometry} material={materials.issesa_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issrad_issrad_with_Tex_0.geometry} material={materials.issrad_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_nasda__nasda_with_Tex__0.geometry} material={materials.nasda_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issusa_issusaf_with_Tex_0.geometry} material={materials.issusaf_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issmb__issmb_with_Tex__0.geometry} material={materials.issmb_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issbs0_issbso2_with_Tex_0.geometry} material={materials.issbso2_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issbso_issbso_with_Tex_0.geometry} material={materials.issbso_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issku0_issku2_with_Tex_0.geometry} material={materials.issku2_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issku2_issku2_with_Tex_0.geometry} material={materials.issku2_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issdis_issdish_with_Tex_0.geometry} material={materials.issdish_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issku1_issku1_with_Tex_0.geometry} material={materials.issku1_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issku__issku_with_Tex__0.geometry} material={materials.issku_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issb4__issb4_with_Tex__0.geometry} material={materials.issb4_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_isssol_isssolar_with_Te_0.geometry} material={materials.isssolar_with_Te} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issb2__issb2_with_Tex__0.geometry} material={materials.issb2_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_isszmo_isszmod_with_Tex_0.geometry} material={materials.isszmod_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issb3__issb3_with_Tex__0.geometry} material={materials.issb3_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issdot_issdot_with_Tex_0.geometry} material={materials.issdot_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issp2__issp2_with_Tex__0.geometry} material={materials.issp2_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_issb_7_issb_with_Tex_I_0.geometry} material={materials.issb_with_Tex_I} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_isspan_isspanel_with_Te_0.geometry} material={materials.isspanel_with_Te} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_d_ring_d_ring_with_Tex_0.geometry} material={materials.d_ring_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_iss_d0_iss_dcs_with_Tex_0.geometry} material={materials.iss_dcs_with_Tex} />
          </group>
          <group position={[7.01, 0, -3.77]}>
            <mesh geometry={nodes.iss_iss_dc_iss_dc_with_Tex_0.geometry} material={materials.iss_dc_with_Tex} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/satellite.gltf')
