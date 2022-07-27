

declare namespace Express {
    interface Request<T> {
        body: T
    }
}