import React, { useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { columns } from './table/columns';
import { toast } from 'sonner';
import { Materia } from '../materias/table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profesores',
        href: '/profesores',
    },
];
type Alumno = {
    id: string
    nombre: string;
    apellido_pat: string;
    apellido_mat: string;
    edad: number;
    matricula: string;
    grado: string;
    materias: Materia[];
}
interface Props {
    alumno: Alumno;
}
export default function Show({ alumno }: Props) {


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 '>
                <div className="bg-red-900 shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        {alumno.nombre} {alumno.apellido_pat} {alumno.apellido_mat}
                    </h2>
                    <div className="space-y-2">
                        <p><span className="font-medium">Nombre:</span> {alumno.nombre}</p>
                        <p><span className="font-medium">Apellido Paterno:</span> {alumno.apellido_pat}</p>
                        <p><span className="font-medium">Apellido Materno:</span> {alumno.apellido_mat}</p>
                        <p><span className="font-medium">Edad:</span> {alumno.edad}</p>
                        <p><span className="font-medium">Matricula:</span> {alumno.matricula}</p>
                        <p><span className="font-medium">Grado:</span> {alumno.grado}</p>

                        <div className="mt-4">
                            <span className="font-medium text-lg">Materias:</span>
                            {alumno.materias.length > 0 ? (
                                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {alumno.materias.map((materia) => (
                                        <div
                                            key={materia.id}
                                            className="bg-indigo-500 text-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
                                        >
                                            <h3 className="font-semibold text-lg">{materia.nombre}</h3>
                                            <p className="text-sm text-gray-300 mt-1">
                                                {materia.horario_inicio} - {materia.horario_fin}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="mt-2">No tiene materias asignadas.</p>
                            )}
                        </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <Link
                            href={`/alumnos/${alumno.id}/edit`}
                            className="p-2 bg-blue-700 text-white rounded hover:bg-blue-700"
                        >
                            Editar
                        </Link>
                        <Link
                            href="/alumnos"
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
