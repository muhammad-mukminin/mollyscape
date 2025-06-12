import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Dashboard() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Ikan Molly</h1>

      <Tabs defaultValue="stok">
        <TabsList className="mb-4">
          <TabsTrigger value="stok">Stok</TabsTrigger>
          <TabsTrigger value="penjualan">Penjualan</TabsTrigger>
          <TabsTrigger value="transaksi">Transaksi Akuntansi</TabsTrigger>
          <TabsTrigger value="laporan">Laporan Keuangan</TabsTrigger>
        </TabsList>

        {/* Stok */}
        <TabsContent value="stok">
          <Card>
            <CardContent className="space-y-4 p-4">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <Input placeholder="Jenis Ikan (Contoh: Molly Orange)" />
                <Input type="number" placeholder="Jumlah Stok" />
                <Input type="date" placeholder="Tanggal Breeding" />
                <Button>Tambah Stok</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Jenis</TableCell>
                    <TableCell>Jumlah</TableCell>
                    <TableCell>Breeding</TableCell>
                    <TableCell>Panen Estimasi</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Molly Orange</TableCell>
                    <TableCell>120</TableCell>
                    <TableCell>2025-06-01</TableCell>
                    <TableCell>2025-06-30</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Penjualan */}
        <TabsContent value="penjualan">
          <Card>
            <CardContent className="space-y-4 p-4">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <Input placeholder="Jenis Ikan" />
                <Input type="number" placeholder="Jumlah" />
                <Input type="number" placeholder="Harga per Ekor" />
                <Button>Catat Penjualan</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Jenis</TableCell>
                    <TableCell>Jumlah</TableCell>
                    <TableCell>Harga</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Molly Hitam</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>3000</TableCell>
                    <TableCell>150000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Transaksi Akuntansi */}
        <TabsContent value="transaksi">
          <Card>
            <CardContent className="space-y-4 p-4">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Pilih Akun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kas">Kas</SelectItem>
                    <SelectItem value="aset">Aset</SelectItem>
                    <SelectItem value="kewajiban">Kewajiban</SelectItem>
                    <SelectItem value="beban">Beban</SelectItem>
                    <SelectItem value="modal">Modal</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="number" placeholder="Jumlah" />
                <Input placeholder="Keterangan" />
                <Button>Tambah Transaksi</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Tanggal</TableCell>
                    <TableCell>Akun</TableCell>
                    <TableCell>Jumlah</TableCell>
                    <TableCell>Keterangan</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2025-06-12</TableCell>
                    <TableCell>Kas</TableCell>
                    <TableCell>100000</TableCell>
                    <TableCell>Modal Awal</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Laporan */}
        <TabsContent value="laporan">
          <Card>
            <CardContent className="p-4 space-y-2">
              <Button variant="outline" className="w-full">Laporan Posisi Keuangan (Neraca)</Button>
              <Button variant="outline" className="w-full">Laporan Laba Rugi</Button>
              <Button variant="outline" className="w-full">Laporan Arus Kas</Button>
              <Button variant="outline" className="w-full">Laporan Perubahan Ekuitas</Button>
              <Button variant="outline" className="w-full">Catatan atas Laporan Keuangan</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
