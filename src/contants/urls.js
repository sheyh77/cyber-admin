export const urls = {
    products: {
        get: '/products',
        post: '/products',
        path: "",
        delete: (id) => `/products/${id}`,
    },
    brands: {
        get: '/brands',
        post: '/brands',
        path: (id) => `/brands/${id}`,
        delete: (id) => `/brands/${id}`,
    }
}