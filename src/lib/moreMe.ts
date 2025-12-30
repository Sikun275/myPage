import { TimelineItem } from '@/types'

/**
 * Timeline items for the MoreMe section
 * 
 * Image format options:
 * - Single image: image: '/path/to/image.jpg'
 * - Multiple images: image: ['/path/to/image1.jpg', '/path/to/image2.jpg', ...]
 * 
 * Multiple images will be displayed in a grid (up to 3 per row)
 */
export const timelineItems: TimelineItem[] = [
  {
    id: '1',
    date: '2021-09',
    place: 'Waterloo, Canada',
    title: 'Where Uni life began 🌆',
    // Single image
    image: '/images/moreMe/Waterloo.HEIC',
  },
  {
    id: '2',
    date: '2021-12',
    place: 'Quebec City, Canada',
    title: 'Christmas in Quebec 🎄',
    // Multiple images, display in a grid
    image: [
      '/images/moreMe/Quebec_0.HEIC', 
      '/images/moreMe/Quebec_1.HEIC',
      '/images/moreMe/Quebec_2.HEIC'],
  },
  {
    id: '3',
    date: '2022-06',
    place: 'Hamilton, Canada',
    title: 'Visit to Hamilton',
    image:[
      '/images/moreMe/Hamilton_0.HEIC', 
      '/images/moreMe/Hamilton_1.HEIC', 
      '/images/moreMe/Hamilton_2.HEIC'],
  },
  {
    id: '4',
    date: '2022-12',
    place: 'Las Vegas, USA',
    title: 'Xmas and NYE in Vegas 🎇',
    image: [
      '/images/moreMe/LV_0.HEIC',
      '/images/moreMe/LV_1.HEIC',
      '/images/moreMe/LV_2.HEIC',
      '/images/moreMe/LV_3.HEIC',
      '/images/moreMe/LV_4.HEIC',
      '/images/moreMe/LV_5.HEIC',
    ]
  },
  {
    id: '5',
    date: '2023-01',
    place: 'Toronto, Canada',
    title: 'First time in Toronto 🇨🇦',
    image: [
      '/images/moreMe/trt_0.jpg',
      '/images/moreMe/trt_1.jpg',
      '/images/moreMe/trt_2.HEIC',
    ]
  },
  {
    id: '6',
    date: '2023-05',
    place: 'Chengdu, Sichuan, China',
    title: 'Summer Holiday back home 🇨🇳',
    image: [
      '/images/moreMe/CDC_0.HEIC',
      '/images/moreMe/CDC_1.HEIC',
      '/images/moreMe/CDC_2.heic',
    ]
  },
  {
    id: '7',
    date: '2023-06',
    place: 'Japan',
    title: 'Travel with mom ❤️',
    image: [
      '/images/moreMe/jp_0.jpg',
      '/images/moreMe/jp_1.HEIC',
      '/images/moreMe/jp_2.HEIC',
      '/images/moreMe/jp_3.HEIC',
      '/images/moreMe/jp_4.HEIC',
      '/images/moreMe/jp_5.HEIC',
      '/images/moreMe/jp_6.HEIC',
      '/images/moreMe/jp_7.HEIC',
      '/images/moreMe/jp_8.HEIC',
    ]
  },
  {
    id: '8',
    date: '2023-09',
    place: 'Waterloo, Canada',
    title: 'Back to loo',
    image: [
      '/images/moreMe/loo_0.JPG',
      '/images/moreMe/loo_1.jpg',
      '/images/moreMe/loo_2.HEIC',
    ]
  },
  {
    id: '9',
    date: '2023-12',
    place: 'California, USA',
    title: 'Christmas road trip in California 🎄',
    image: [
      '/images/moreMe/cali_0.MP4',
      '/images/moreMe/cali_1.HEIC',
      '/images/moreMe/cali_2.HEIC',
      '/images/moreMe/cali_3.JPG',
      '/images/moreMe/cali_4.HEIC',
      '/images/moreMe/cali_5.HEIC',
      '/images/moreMe/cali_6.HEIC',
      '/images/moreMe/cali_7.HEIC',
      '/images/moreMe/cali_8.JPG',
    ]
  },
  {
    id: '10',
    date: '2024-02',
    place: 'Niagara Falls, Canada',
    title: 'Niagara Falls',
    image: [
      '/images/moreMe/nf_0.JPG',
      '/images/moreMe/nf_1.JPG',
      '/images/moreMe/nf_2.HEIC',
      '/images/moreMe/nf_3.HEIC',
      '/images/moreMe/nf_4.HEIC',
      '/images/moreMe/nf_5.JPG',
    ]
  }
]

