import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



export default function Artifact3DViewer() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [artifactType, setArtifactType] = useState('serpent');

  useEffect(() => {
    if (!mountRef.current) return;

    // 初始化场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // 初始化相机
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    // 初始化渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // 添加光源
    const light = new THREE.DirectionalLight(0xff0000, 1);
    light.position.set(1, 1, 1);
    scene.add(light);
    
    // 创建3D模型
    let artifact: THREE.Object3D;
    
    if (artifactType === 'serpent') {
      const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xff0000, 
        emissive: 0xff0000,
        shininess: 100 
      });
      artifact = new THREE.Mesh(geometry, material);
    } else if (artifactType === 'mask') {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xff0000,
        wireframe: true 
      });
      artifact = new THREE.Mesh(geometry, material);
    } else {
      const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xff0000,
        transparent: true,
        opacity: 0.8 
      });
      artifact = new THREE.Mesh(geometry, material);
    }
    
    scene.add(artifact);
    
    // 添加控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    
    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    
    // 响应式调整
    const handleResize = () => {
      camera.aspect = mountRef.current!.clientWidth / mountRef.current!.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [artifactType]);

  return (
    <div className="p-6 bg-black/70 rounded-lg border border-red-500/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-cinzel">设备图解</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setArtifactType('serpent')}
            className={`px-3 py-1 rounded font-courier ${artifactType === 'serpent' ? 'bg-red-500 text-black' : 'bg-black text-white border border-red-500'}`}
          >
            蛇型装置
          </button>
          <button 
            onClick={() => setArtifactType('mask')}
            className={`px-3 py-1 rounded font-courier ${artifactType === 'mask' ? 'bg-red-500 text-black' : 'bg-black text-white border border-red-500'}`}
          >
            仪式面具
          </button>
          <button 
            onClick={() => setArtifactType('device')}
            className={`px-3 py-1 rounded font-courier ${artifactType === 'device' ? 'bg-red-500 text-black' : 'bg-black text-white border border-red-500'}`}
          >
            相位装置
          </button>
        </div>
      </div>
      <div ref={mountRef} className="w-full h-64" />
    </div>
  );
}
