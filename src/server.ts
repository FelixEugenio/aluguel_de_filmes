import 'reflect-metadata';
import '../src/shared/container';  // Suponho que o container seja utilizado para injeção de dependências
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes';
import { AppError } from './errors/AppError';  // Certifique-se de que AppError está corretamente importado
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

// Middleware de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: `Erro interno do servidor - ${err.message}`,
    });
});

app.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333');
});
