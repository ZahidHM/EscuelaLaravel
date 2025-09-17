import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Profesor } from '../profesores/table/columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Materias',
        href: '/materias',
    },
];

type Materia = {
    id: string;
    nombre: string;
    horario_inicio: string;
    horario_fin: string;
    profesor: Profesor | null;
};

interface Props {
    materia: Materia;
}

export default function Show({ materia }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="container mx-auto py-10 px-10">
                <div className="bg-red-900 shadow rounded-lg p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">{materia.nombre}</h2>
                    <div className="space-y-2">
                        <p>
                            <span className="font-medium">Nombre:</span> {materia.nombre}
                        </p>
                        <p>
                            <span className="font-medium">Horario:</span> {materia.horario_inicio} - {materia.horario_fin}
                        </p>
                        <p>
                            <span className="font-medium">Profesor:</span>{' '}
                            {materia.profesor
                                ? `${materia.profesor.nombre} ${materia.profesor.apellido_pat} ${materia.profesor.apellido_mat}`
                                : 'No asignado'}
                        </p>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <Link
                            href={`/materias/${materia.id}/edit`}
                            className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                        >
                            Editar
                        </Link>
                        <Link
                            href="/materias"
                            className="p-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                        >
                            Volver
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
