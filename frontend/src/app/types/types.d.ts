export interface Product {
    id: number;
    nombre: string;
    fecha_vencimiento: string;
    stock: number;
    precio: double;
    url_img: string;
    id_categoria: number;
}

export interface Categoria {
    id: number;
    nombre: string;
}