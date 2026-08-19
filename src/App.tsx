/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DiseaseList from './pages/DiseaseList';
import DiseaseDetail from './pages/DiseaseDetail';
import TangPhu from './pages/TangPhu';
import NguDuHuyet from './pages/NguDuHuyet';
import MachHoc from './pages/MachHoc';
import ViThuoc from './pages/ViThuoc';

function RootRedirect() {
  const lastRoute = localStorage.getItem('mediconnect_last_route');
  const target = lastRoute && lastRoute !== '/' && lastRoute !== '' ? lastRoute : '/tang-phu';
  return <Navigate to={target} replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RootRedirect />} />
          <Route path="tang-phu" element={<TangPhu />} />
          <Route path="diseases" element={<DiseaseList />} />
          <Route path="diseases/:id" element={<DiseaseDetail />} />
          <Route path="ngu-du-huyet" element={<NguDuHuyet />} />
          <Route path="ngu-du-que-dich" element={<Navigate to="/ngu-du-huyet?tab=que-dich" replace />} />
          <Route path="28-mach" element={<MachHoc />} />
          <Route path="mach-hoc" element={<Navigate to="/28-mach" replace />} />
          <Route path="vi-thuoc" element={<ViThuoc />} />
          <Route path="he-thong-vi-thuoc" element={<Navigate to="/vi-thuoc" replace />} />
          <Route path="*" element={<RootRedirect />} />
        </Route>
      </Routes>
    </Router>
  );
}

