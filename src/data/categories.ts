import { StaticImageData } from 'next/image'
import Workstation from '@/assets/workstation/workstation.png'
import Server from '@/assets/server/servers.png'
import Switch from '@/assets/switches/cisco.png'
import SFP from '@/assets/switches/sfp.png'
import LanCard4 from '@/assets/server/lan-card-4.png'
import LanCard2 from '@/assets/server/lan-card-2.png'
import HP from '@/assets/workstation/hp.png'
import Dell from '@/assets/server/dell.png'

export interface Product {
  id: number
  name: string
  slug: string
  brand: string
  model: string
  price: number
  originalPrice?: number
  images: StaticImageData[]
  description: string
  specifications: {
    [key: string]: string | string[]
  }
  features: string[]
  warranty: string
  stock: 'In Stock' | 'Out of Stock' | 'Coming Soon'
  tags: string[]
  categoryId: number
}

export interface Category {
  id: number
  name: string
  image: StaticImageData
  description: string
  count: string
  products: Product[]
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Server',
    image: Server,
    description: 'High-performance enterprise servers',
    count: '50+ Products',
    products: [
      {
        id: 1,
        name: 'Dell PowerEdge R740 Server',
        slug: 'dell-poweredge-r740-server',
        brand: 'Dell',
        model: 'PowerEdge R740',
        price: 450000,
        originalPrice: 500000,
        images: [Server, Dell],
        description: 'The Dell PowerEdge R740 is a powerful 2U rack server designed for complex workloads using highly scalable memory, I/O capacity, and network options.',
        specifications: {
          processor: 'Intel® Xeon® Gold 6258R 2.7G',
          memory: '64GB DDR4',
          storage: ['2x 480GB SSD', '4x 2.4TB 10K RPM SAS'],
          networkInterface: '4x 1GbE LOM',
          powerSupply: 'Dual, Hot-plug, Redundant Power Supply (1+1), 750W',
          formFactor: '2U Rack Server'
        },
        features: [
          'Dual Intel Xeon processors',
          'Up to 28 cores per processor',
          'Up to 3TB RAM capacity',
          'Hot-plug drives',
          'iDRAC9 Enterprise'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Server', 'Dell', 'Enterprise', '2U', 'Rack Server'],
        categoryId: 1
      },
      {
        id: 2,
        name: 'HP ProLiant DL380 Gen10',
        slug: 'hp-proliant-dl380-gen10',
        brand: 'HP',
        model: 'ProLiant DL380 Gen10',
        price: 480000,
        originalPrice: 520000,
        images: [Server, HP],
        description: 'The HP ProLiant DL380 Gen10 server delivers the latest in security, performance and expandability.',
        specifications: {
          processor: 'Intel® Xeon® Gold 5218R 2.1G',
          memory: '96GB DDR4',
          storage: ['2x 800GB SSD', '6x 2.4TB 10K RPM SAS'],
          networkInterface: '4x 10GbE LOM',
          powerSupply: 'Dual, Hot-plug, Redundant Power Supply (1+1), 800W',
          formFactor: '2U Rack Server'
        },
        features: [
          'Silicon Root of Trust',
          'Intelligent System Tuning',
          'Adaptive Array RAID',
          'iLO 5 Advanced Security'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Server', 'HP', 'Enterprise', '2U', 'Rack Server'],
        categoryId: 1
      },
      {
        id: 12,
        name: 'Dell PowerEdge R750 Server',
        slug: 'dell-poweredge-r750-server',
        brand: 'Dell',
        model: 'PowerEdge R750',
        price: 520000,
        originalPrice: 550000,
        images: [Server, Dell],
        description: 'The Dell PowerEdge R750 is a dual-socket 2U rack server that delivers outstanding performance for the most demanding workloads.',
        specifications: {
          processor: 'Intel® Xeon® Gold 6338 2.0G',
          memory: '128GB DDR4',
          storage: ['4x 960GB SSD', '6x 2.4TB 10K RPM SAS'],
          networkInterface: '4x 10GbE LOM',
          powerSupply: 'Dual, Hot-plug, Redundant Power Supply (1+1), 1100W',
          formFactor: '2U Rack Server'
        },
        features: [
          'Latest Intel Ice Lake processors',
          'PCIe Gen4 support',
          'Enhanced thermal design',
          'Integrated security features',
          'iDRAC9 Enterprise'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Server', 'Dell', 'Enterprise', '2U', 'Rack Server', 'Gen4'],
        categoryId: 1
      }
    ]
  },
  {
    id: 2,
    name: 'Switch',
    image: Switch,
    description: 'Enterprise-grade network switches',
    count: '30+ Products',
    products: [
      {
        id: 3,
        name: 'Cisco Catalyst 9300 Switch',
        slug: 'cisco-catalyst-9300-switch',
        brand: 'Cisco',
        model: 'Catalyst 9300',
        price: 250000,
        originalPrice: 280000,
        images: [Switch],
        description: 'The Cisco Catalyst 9300 Series is the next generation of enterprise-class switches built for security, IoT, and cloud.',
        specifications: {
          ports: '24 Port Gigabit Ethernet',
          uplinks: '4x 10G SFP+',
          switching: '128 Gbps',
          stackBandwidth: '480 Gbps',
          powerSupply: 'Dual redundant power supplies',
        },
        features: [
          'StackWise-480',
          'SD-Access',
          'Advanced Security',
          'Cisco DNA Center'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Switch', 'Cisco', 'Enterprise', 'Network'],
        categoryId: 2
      },
      {
        id: 4,
        name: 'Cisco Nexus 9300 Switch',
        slug: 'cisco-nexus-9300-switch',
        brand: 'Cisco',
        model: 'Nexus 9300',
        price: 350000,
        originalPrice: 380000,
        images: [Switch],
        description: 'High-performance, low-latency, and power-efficient switch designed for data center deployments.',
        specifications: {
          ports: '48 Port 10/25G SFP+',
          uplinks: '6x 100G QSFP28',
          switching: '3.6 Tbps',
          latency: '< 1 microsecond',
          powerSupply: 'Dual redundant power supplies',
        },
        features: [
          'Cloud-Scale ASIC',
          'Real-time visibility',
          'Automation',
          'ACI Ready'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Switch', 'Cisco', 'Data Center', 'Network'],
        categoryId: 2
      },
      {
        id: 16,
        name: 'Cisco Catalyst 9500 Switch',
        slug: 'cisco-catalyst-9500-switch',
        brand: 'Cisco',
        model: 'Catalyst 9500',
        price: 420000,
        originalPrice: 450000,
        images: [Switch],
        description: 'The Cisco Catalyst 9500 Series is the industry\'s first purpose-built 40-Gbps switch targeted for the enterprise campus.',
        specifications: {
          ports: '32 Port 40G QSFP+',
          uplinks: '8x 100G QSFP28',
          switching: '6.4 Tbps',
          stackBandwidth: '960 Gbps',
          powerSupply: 'Dual redundant power supplies',
        },
        features: [
          'StackWise-960',
          'Advanced Security Features',
          'Cisco DNA Center Support',
          'Application Visibility'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Switch', 'Cisco', 'Enterprise', 'Network', 'High-Speed'],
        categoryId: 2
      }
    ]
  },
  {
    id: 3,
    name: 'Workstation',
    image: Workstation,
    description: 'Professional workstations for demanding tasks',
    count: '20+ Products',
    products: [
      {
        id: 5,
        name: 'HP Z4 G4 Workstation',
        slug: 'hp-z4-g4-workstation',
        brand: 'HP',
        model: 'Z4 G4',
        price: 350000,
        originalPrice: 380000,
        images: [Workstation, HP],
        description: 'Professional workstation designed for high-end computing and graphics-intensive tasks.',
        specifications: {
          processor: 'Intel® Xeon® W-2245',
          memory: '64GB DDR4 ECC',
          storage: ['1TB NVMe SSD', '2TB SATA HDD'],
          graphics: 'NVIDIA Quadro RTX 4000',
          powerSupply: '750W',
        },
        features: [
          'Intel Xeon processor',
          'ECC Memory',
          'NVIDIA Quadro graphics',
          'Tool-less design'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Workstation', 'HP', 'Professional', 'Graphics'],
        categoryId: 3
      },
      {
        id: 6,
        name: 'Dell Precision 7920 Tower',
        slug: 'dell-precision-7920-tower',
        brand: 'Dell',
        model: 'Precision 7920',
        price: 420000,
        originalPrice: 450000,
        images: [Workstation, Dell],
        description: 'Dell\'s most powerful and expandable workstation for complex projects.',
        specifications: {
          processor: 'Dual Intel® Xeon® Gold 6230R',
          memory: '128GB DDR4 ECC',
          storage: ['2TB NVMe SSD', '4TB SATA HDD'],
          graphics: 'NVIDIA RTX A5000',
          powerSupply: '1400W',
        },
        features: [
          'Dual Intel Xeon processors',
          'ISV Certified',
          'AI-Ready',
          'Reliable Memory Technology'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Workstation', 'Dell', 'Professional', 'Graphics'],
        categoryId: 3
      }
    ]
  },
  {
    id: 4,
    name: 'SFP',
    image: SFP,
    description: 'High-speed optical transceivers',
    count: '30+ Products',
    products: [
      {
        id: 7,
        name: 'Cisco SFP-10G-SR',
        slug: 'cisco-sfp-10g-sr',
        brand: 'Cisco',
        model: 'SFP-10G-SR',
        price: 15000,
        originalPrice: 18000,
        images: [SFP],
        description: '10GBASE-SR SFP+ Module for MMF, 850-nm, LC duplex connector',
        specifications: {
          type: '10GBASE-SR',
          wavelength: '850 nm',
          distance: 'Up to 300m on OM3 MMF',
          connector: 'LC Duplex',
          dataRate: '10 Gbps',
          formFactor: 'SFP+'
        },
        features: [
          'Hot-swappable',
          'Digital Diagnostics Monitoring',
          'MSA Compliant',
          'RoHS Compliant'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['SFP', 'Cisco', 'Optical', '10G'],
        categoryId: 4
      },
      {
        id: 8,
        name: 'Cisco GLC-SX-MMD',
        slug: 'cisco-glc-sx-mmd',
        brand: 'Cisco',
        model: 'GLC-SX-MMD',
        price: 8000,
        originalPrice: 10000,
        images: [SFP],
        description: '1000BASE-SX SFP transceiver module for MMF, 850-nm, extended DOM',
        specifications: {
          type: '1000BASE-SX',
          wavelength: '850 nm',
          distance: 'Up to 550m on OM2 MMF',
          connector: 'LC Duplex',
          dataRate: '1 Gbps',
          formFactor: 'SFP'
        },
        features: [
          'DOM Support',
          'Hot-swappable',
          'Industry Standard',
          'Low Power Consumption'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['SFP', 'Cisco', 'Optical', '1G'],
        categoryId: 4
      }
    ]
  },
  {
    id: 5,
    name: 'Lan Card 4 Ports',
    image: LanCard4,
    description: 'Quad-port network interface cards',
    count: '15+ Products',
    products: [
      {
        id: 9,
        name: 'Intel X710-T4L',
        slug: 'intel-x710-t4l',
        brand: 'Intel',
        model: 'X710-T4L',
        price: 45000,
        originalPrice: 50000,
        images: [LanCard4],
        description: 'Intel Ethernet Converged Network Adapter X710-T4L, quad-port 10GbE',
        specifications: {
          ports: '4x 10GBase-T',
          interface: 'PCIe 3.0 x8',
          features: ['SR-IOV', 'VXLAN', 'NVGRE'],
          powerConsumption: '11.0W Typical',
          formFactor: 'Low Profile'
        },
        features: [
          'Intel Ethernet Flow Director',
          'Data Plane Development Kit (DPDK)',
          'Virtualization Optimized',
          'Advanced Packet Filtering'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Network Card', 'Intel', '10GbE', 'Quad Port'],
        categoryId: 5
      },
      {
        id: 10,
        name: 'HP 366FLR',
        slug: 'hp-366flr',
        brand: 'HP',
        model: '366FLR',
        price: 28000,
        originalPrice: 32000,
        images: [LanCard4],
        description: 'HP Ethernet 1Gb 4-port 366FLR Adapter',
        specifications: {
          ports: '4x 1GBase-T',
          interface: 'PCIe 2.0 x4',
          features: ['TCP/IP Offload Engine', 'iSCSI'],
          powerConsumption: '7.0W Typical',
          formFactor: 'FlexibleLOM'
        },
        features: [
          'HP Sea of Sensors 3D',
          'Network Partitioning',
          'Smart Queue Technology',
          'Energy Efficient Ethernet'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Network Card', 'HP', '1GbE', 'Quad Port'],
        categoryId: 5
      }
    ]
  },
  {
    id: 6,
    name: 'Lan Card 2 Ports',
    image: LanCard2,
    description: 'Dual-port network interface cards',
    count: '15+ Products',
    products: [
      {
        id: 11,
        name: 'Intel X520-DA2',
        slug: 'intel-x520-da2',
        brand: 'Intel',
        model: 'X520-DA2',
        price: 32000,
        originalPrice: 35000,
        images: [LanCard2],
        description: 'Intel Ethernet Server Adapter X520-DA2 dual-port 10GbE SFP+',
        specifications: {
          ports: '2x 10GbE SFP+',
          interface: 'PCIe 2.0 x8',
          features: ['SR-IOV', 'VMDq'],
          powerConsumption: '6.2W Typical',
          formFactor: 'Low Profile'
        },
        features: [
          'Intel Virtualization Technology',
          'Load Balancing',
          'iSCSI Accelerator',
          'Direct Cache Access'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Network Card', 'Intel', '10GbE', 'Dual Port'],
        categoryId: 6
      },
      {
        id: 15,
        name: 'HP 332T',
        slug: 'hp-332t',
        brand: 'HP',
        model: '332T',
        price: 18000,
        originalPrice: 20000,
        images: [LanCard2],
        description: 'HP Ethernet 1Gb 2-port 332T Adapter',
        specifications: {
          ports: '2x 1GBase-T',
          interface: 'PCIe 2.0 x1',
          features: ['MSI-X', 'Checksum Offload'],
          powerConsumption: '4.4W Typical',
          formFactor: 'Standard and Low Profile'
        },
        features: [
          'Jumbo Frame Support',
          'Auto-negotiation',
          'Wake on LAN',
          'PXE Support'
        ],
        warranty: 'International Warranty',
        stock: 'In Stock',
        tags: ['Network Card', 'HP', '1GbE', 'Dual Port'],
        categoryId: 6
      }
    ]
  }
]

export const getCategories = () => categories
export const getCategory = (id: number) => categories.find(cat => cat.id === id)
export const getProduct = (id: number) => {
  for (const category of categories) {
    const product = category.products.find(p => p.id === id)
    if (product) return product
  }
  return null
}
export const getProductBySlug = (slug: string) => {
  for (const category of categories) {
    const product = category.products.find(p => p.slug === slug)
    if (product) return product
  }
  return null
} 
export const getProductById = (id: number) => {
  for (const category of categories) {
    const product = category.products.find(p => p.id === id)
    if (product) return product
  }
  return null
} 