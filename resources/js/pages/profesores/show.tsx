import React, { useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { Profesor, columns } from './table/columns';
import { toast } from 'sonner';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profesores',
        href: '/profesores',
    },
];

interface Props {
    profesor: Profesor;
}
export default function Show({ profesor }: Props) {



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 '>
                <div className="bg-red-900 shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        {profesor.nombre} {profesor.apellido_pat} {profesor.apellido_mat}
                    </h2>
                    <div className="space-y-2">
                        <p><span className="font-medium">Nombre:</span> {profesor.nombre}</p>
                        <p><span className="font-medium">Apellido Paterno:</span> {profesor.apellido_pat}</p>
                        <p><span className="font-medium">Apellido Materno:</span> {profesor.apellido_mat}</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <Link
                            href={`/profesores/${profesor.id}/edit`}
                            className="p-2 bg-blue-700 text-white rounded hover:bg-blue-700"
                        >
                            Editar
                        </Link>
                        <Link
                            href="/profesores"
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
