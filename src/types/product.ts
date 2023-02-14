import { ImageSourcePropType } from "react-native";

export interface IProductCardProps {
    key: string | number,
    title: string,
    shortDescription: string,
    fullDescription: string,
    category: string,
    quantity: number,
    imageUri: ImageSourcePropType,
    onPress?: () => void
}