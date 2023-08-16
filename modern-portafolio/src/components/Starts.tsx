import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useDispatch, useSelector } from "react-redux";
import { darkmodeC, startmodeC} from "../settings/actionslice";

type Props = {}


const Stars = (props:  Props) => {
  const darklight = useSelector(darkmodeC);
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if(ref.current)
    {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
   
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points  ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={darklight ? "#F6D906" : "#0F0F0F"}
          size={0.0022}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
    const starmode = useSelector(startmodeC);
    return (
      <div
        className={`w-full h-auto ${
          starmode ? "fixed" : " absolute"
        } inset-0 z-[-2]`}
      >
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            { starmode ? <Stars /> : ""}
            {/* <mesh>
            <boxGeometry  />
            </mesh> */}
            
          </Suspense>
  
          <Preload all />
        </Canvas>
      </div>
    );
};

export default StarsCanvas;