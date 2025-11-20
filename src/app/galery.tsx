import { useGaleryViewModel } from "../viewmodel/useGaleryViewModel";
import { Modal } from "react-native";
import { useRouter } from "expo-router";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";

export default function GaleryScreen() {
  const router = useRouter();
  const vm = useGaleryViewModel();

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Box className="flex-1 bg-black">
      {/* HEADER */}
      <Pressable onPress={() => router.replace("/")} className="px-4 py-4">
        <Text className="text-white text-lg">⬅ Voltar</Text>
      </Pressable>

      {/* GRID DE FOTOS */}
      <Box className="flex-row flex-wrap justify-center">
        {vm.photos.map((item) => (
          <Pressable key={item.uri} onPress={() => vm.openPhoto(item)}>
            <Box className="m-1">
              <Image
                source={{ uri: item.uri }}
                alt="photo"
                className="w-[120px] h-[120px] rounded-lg"
              />

              <Pressable onPress={() => vm.deletePhoto(item.uri)}>
                <Text className="text-red-500 text-center mt-1 font-semibold">
                  Excluir
                </Text>
              </Pressable>
            </Box>
          </Pressable>
        ))}
      </Box>

      {/* MODAL DE DETALHE */}
      <Modal visible={!!vm.selectedPhoto} transparent animationType="fade">
        <Box className="flex-1 bg-black/70 justify-center items-center">
          {vm.selectedPhoto && (
            <Box className="bg-[#111] p-5 rounded-xl w-[85%]">

              <Image
                source={{ uri: vm.selectedPhoto.uri }}
                alt="selected-photo"
                className="w-full h-[250px] rounded-xl"
                resizeMode="contain"
              />

              <Text className="text-white mt-4 text-base">
                📅 {formatDate(vm.selectedPhoto.timestamp)}
              </Text>

              <Text className="text-white mt-2">
                📍 Latitude: {vm.selectedPhoto.latitude ?? "N/A"}
              </Text>

              <Text className="text-white mb-2">
                📍 Longitude: {vm.selectedPhoto.longitude ?? "N/A"}
              </Text>

              <Pressable
                onPress={vm.closePhoto}
                className="bg-red-600 mt-4 py-3 rounded-lg items-center"
              >
                <Text className="text-white font-bold">Fechar</Text>
              </Pressable>

            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
