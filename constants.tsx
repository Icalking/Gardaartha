
import React from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Wallet, 
  Users, 
} from 'lucide-react';
import { NavItem, Package, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Keunggulan', href: '#features' },
  { label: 'Paket Lab', href: '#packages' },
  { label: 'Legalitas', href: '#legality' },
  { label: 'Edukasi AI', href: '#ai-assistant' },
  { label: 'Kontak', href: '#contact' },
];

export const INVESTMENT_PACKAGES: Package[] = [
  {
    id: 'lab1',
    name: 'Lab 1 (Starter)',
    initial: 'Rp500.000',
    target: 'Rp2.000.000',
    description: 'Cocok untuk pemula yang ingin mencoba sistem Laboratorium Investasi kami.',
  },
  {
    id: 'lab2',
    name: 'Lab 2 (Standard)',
    initial: 'Rp2.000.000',
    target: 'Rp8.000.000',
    description: 'Pilihan populer untuk pertumbuhan aset yang lebih signifikan.',
    isPopular: true,
  },
  {
    id: 'lab3',
    name: 'Lab 3 (Premium)',
    initial: 'Rp5.000.000',
    target: 'Rp20.000.000',
    description: 'Strategi tingkat lanjut untuk investor serius.',
  },
  {
    id: 'labX',
    name: 'Lab X (VIP)',
    initial: 'Rp10.000.000',
    target: 'Rp50.000.000',
    description: 'Pengelolaan aset eksklusif dengan target profit maksimal.',
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'Legal & Terpercaya',
    description: 'Terdaftar resmi di Bappebti. Keamanan hukum Anda adalah prioritas utama kami dalam setiap langkah.',
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Analisis Berbasis Riset',
    description: 'Keputusan trading diambil berdasarkan data mendalam dan algoritma teruji, bukan sekadar spekulasi.',
    icon: <BarChart3 className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Manajemen Risiko 50/50',
    description: 'Perlindungan dana nasabah dengan skema pengembalian 50% jika terjadi kerugian di luar kendali.',
    icon: <Wallet className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Transparansi Penuh',
    description: 'Akses laporan perkembangan akun secara real-time. Anda memegang kendali penuh atas informasi aset.',
    icon: <Users className="w-8 h-8 text-amber-500" />,
  },
];
