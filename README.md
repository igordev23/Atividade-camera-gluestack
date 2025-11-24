# Aplicativo de Câmera com Arquitetura MVVM

## Disciplina
**Programação para Dispositivos Móveis (PDM)**

## Objetivo Geral
Este projeto tem como objetivo refatorar um aplicativo de câmera desenvolvido anteriormente, transformando-o em um projeto estruturado segundo a arquitetura MVVM (Model-View-ViewModel). Além disso, o aplicativo foi reorganizado em duas telas distintas e sua interface foi reescrita utilizando a biblioteca **react-native-gluestack**.

---

## Estrutura do Projeto

O projeto foi organizado em pastas para garantir a separação de responsabilidades e facilitar a manutenção. A estrutura é a seguinte:


---

## Arquitetura MVVM

O projeto foi reorganizado para seguir a arquitetura MVVM, garantindo uma separação clara entre responsabilidades:

### **Model**
- **MyPhoto.ts**: Define a estrutura de dados para fotos capturadas, incluindo URI, latitude, longitude e timestamp.
- Outras estruturas necessárias ao estado da aplicação.

### **ViewModel**
- **UseIndexViewModel.ts**:
  - Gerencia o estado da câmera (ex.: tipo front/back).
  - Lida com permissões de câmera e localização.
  - Implementa a lógica de captura de fotos e armazenamento de localização.
- **GaleyViewModel.ts**:
  - Gerencia a lista reativa de fotos capturadas.
  - Implementa funções para adicionar e excluir fotos.

A ViewModel expõe dados e funções puramente através de estados e métodos, sem lógica visual.

### **View**
- **index.tsx**:
  - Tela de pré-visualização da câmera.
  - Exibe o componente de câmera.
  - Permite alternar entre câmera frontal e traseira.
  - Botão para capturar fotos.
- **galery.tsx**:
  - Tela de lista de fotos com localização.
  - Exibe miniaturas das fotos capturadas.
  - Mostra latitude e longitude quando disponíveis.
  - Ordena por data de captura.

Os componentes visuais recebem tudo via props, sem regras de negócio. Estados locais são usados apenas para UI.

---

## Interface com Gluestack UI

A interface foi reescrita utilizando a biblioteca **react-native-gluestack**, substituindo os componentes nativos pelos equivalentes da biblioteca. Os principais componentes utilizados incluem:
- **Box, Button, Text**
- **VStack, HStack**
- **Image**
- **ScrollView/FlatListWrapper**

A interface final é limpa, organizada, responsiva e fiel aos princípios de UI da biblioteca.

---

## Funcionalidades Implementadas

### **Tela de Pré-visualização da Câmera**
- Exibe o componente de câmera.
- Permite alternar entre câmera frontal e traseira.
- Botão para capturar fotos.

### **Tela de Lista de Fotos com Localização**
- Exibe miniaturas das fotos capturadas.
- Mostra latitude e longitude quando disponíveis.
- Ordena por data de captura.

### **Navegação**
- Navegação entre as telas implementada com **expo-router**.

---

## Desafio Extra (Opcional)

A terceira tela chamada **PhotoDetailScreen** foi implementada com sucesso. Ela exibe:
- A foto em tamanho grande.
- Um mapa com marcador indicando a localização onde a foto foi tirada (se disponível).

### Funcionalidades:
- Exibição da foto capturada em tamanho grande.
- Exibição de um mapa interativo com marcador, utilizando `react-native-maps`.
- Informações adicionais, como data e coordenadas (latitude e longitude).
- Botão para retornar à galeria.

### Tecnologias utilizadas:
- **React Native**
- **Expo Router** para navegação.
- **react-native-maps** para exibição do mapa.

### Como testar:
1. Navegue até a galeria.
3. Clique na foto para ver os detalhes.
4. Clique no botão "Detalhes" de uma foto.
5. Verifique a exibição da foto, mapa e informações adicionais.
6. Utilize o botão "Voltar" para retornar à galeria.



---

## Como Executar o Projeto

### **Pré-requisitos**
- Node.js instalado.
- Expo CLI configurado.

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/igordev23/Atividade-camera-gluestack.git
```
2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o aplicativo:
   ```bash
   npx expo start
   ```