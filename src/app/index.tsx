import { CameraView } from "expo-camera";
import { useIndexViewModel } from "../viewmodel/UseIndexViewModel";
import { useEffect } from "react";
import { useRouter } from "expo-router";

import { Box } from "@/components/ui/box";
import { Text } from '@/components/ui/text';
import { Pressable } from "@/components/ui/pressable";
import { HStack } from "@/components/ui/hstack";

export default function Home() {
  const router = useRouter();
  const vm = useIndexViewModel();

  useEffect(() => {
    vm.requestCameraPermission();
    vm.requestLocationPermission();
  }, []);

  if (!vm.cameraPermission) {
    return (
      <Box className="flex-1 justify-center items-center bg-black">
        <Text className="text-white text-lg mb-4">
          Permita acesso à câmera
        </Text>

        <Pressable
          onPress={vm.requestCameraPermission}
          className="px-4 py-3 bg-primary-500 rounded-lg"
        >
          <Text className="text-white font-bold">Permitir</Text>
        </Pressable>
      </Box>
    );
  }

  return (
    <Box className="flex-1">
      <CameraView
        ref={vm.cameraRef}
        style={{ flex: 1 }}
        facing={vm.facing}
      />

      {/* BOTÕES — padrões gluestack UI */}
      <HStack
        className="
          absolute bottom-0 
          w-full 
          justify-around 
          px-6 pb-10 
          bg-black/20
        "
      >
        <Pressable
          onPress={vm.toggleFacing}
          className="px-5 py-3 bg-primary-500 rounded-xl"
        >
          <Text className="text-white font-semibold">Flip</Text>
        </Pressable>

        <Pressable
          onPress={vm.takePhoto}
          className="px-5 py-3 bg-primary-500 rounded-xl"
        >
          <Text className="text-white font-semibold">
            {vm.loading ? "Carregando..." : "Tirar Foto"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/galery")}
          className="px-5 py-3 bg-slate-700 rounded-xl"
        >
          <Text className="text-white font-semibold">Galeria</Text>
        </Pressable>
      </HStack>
    </Box>
  );
}
