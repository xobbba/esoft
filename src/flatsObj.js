const flatsObj = [
  {'id': 101, 'floor': 1, 'pos_on_floor': 1, 'price': 2880000, 'rooms': 1, 'area_total': 33.5, 'area_kitchen': 11.4, 'area_live': 14.5, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png'},
  {'id': 102, 'floor': 1, 'pos_on_floor': 2, 'price': 5050000, 'rooms': 2, 'area_total': 64.8, 'area_kitchen': 19.2, 'area_live': 33, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png'},
  {'id': 103, 'floor': 1, 'pos_on_floor': 3, 'price': 3030000, 'rooms': 1, 'area_total': 36.5, 'area_kitchen': 11.7, 'area_live': 17.4, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png'},
  {'id': 104, 'floor': 1, 'pos_on_floor': 4, 'price': 3000000, 'rooms': 1, 'area_total': 35.8, 'area_kitchen': 15, 'area_live': 11.2, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png'},
  {'id': 105, 'floor': 1, 'pos_on_floor': 5, 'price': 5200000, 'rooms': 2, 'area_total': 66.6, 'area_kitchen': 18.5, 'area_live': 29.4, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png'},
  {'id': 106, 'floor': 1, 'pos_on_floor': 6, 'price': 6050000, 'rooms': 3, 'area_total': 85.3, 'area_kitchen': 16.6, 'area_live': 46.6, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png'},
  {'id': 107, 'floor': 2, 'pos_on_floor': 1, 'price': 2880000, 'rooms': 1, 'area_total': 33.5, 'area_kitchen': 11.4, 'area_live': 14.5, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png'},
  {'id': 108, 'floor': 2, 'pos_on_floor': 2, 'price': 5050000, 'rooms': 2, 'area_total': 64.8, 'area_kitchen': 19.2, 'area_live': 33, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png'},
  {'id': 109, 'floor': 2, 'pos_on_floor': 3, 'price': 3030000, 'rooms': 1, 'area_total': 36.5, 'area_kitchen': 11.7, 'area_live': 17.4, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png'},
  {'id': 110, 'floor': 2, 'pos_on_floor': 4, 'price': 3000000, 'rooms': 1, 'area_total': 35.8, 'area_kitchen': 15, 'area_live': 11.2, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png'},
  {'id': 111, 'floor': 2, 'pos_on_floor': 5, 'price': 5200000, 'rooms': 2, 'area_total': 66.6, 'area_kitchen': 18.5, 'area_live': 29.4, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png'},
  {'id': 112, 'floor': 2, 'pos_on_floor': 6, 'price': 6050000, 'rooms': 3, 'area_total': 85.3, 'area_kitchen': 16.6, 'area_live': 46.6, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png'},
  {'id': 113, 'floor': 3, 'pos_on_floor': 1, 'price': 2880000, 'rooms': 1, 'area_total': 33.5, 'area_kitchen': 11.4, 'area_live': 14.5, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png'},
  {'id': 114, 'floor': 3, 'pos_on_floor': 2, 'price': 5050000, 'rooms': 2, 'area_total': 64.8, 'area_kitchen': 19.2, 'area_live': 33, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png'},
  {'id': 115, 'floor': 3, 'pos_on_floor': 3, 'price': 3030000, 'rooms': 1, 'area_total': 36.5, 'area_kitchen': 11.7, 'area_live': 17.4, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png'},
  {'id': 116, 'floor': 3, 'pos_on_floor': 4, 'price': 3000000, 'rooms': 1, 'area_total': 35.8, 'area_kitchen': 15, 'area_live': 11.2, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png'},
  {'id': 117, 'floor': 3, 'pos_on_floor': 5, 'price': 5200000, 'rooms': 2, 'area_total': 66.6, 'area_kitchen': 18.5, 'area_live': 29.4, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png'},
  {'id': 118, 'floor': 3, 'pos_on_floor': 6, 'price': 6050000, 'rooms': 3, 'area_total': 85.3, 'area_kitchen': 16.6, 'area_live': 46.6, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png'},
  {'id': 119, 'floor': 4, 'pos_on_floor': 1, 'price': 2880000, 'rooms': 1, 'area_total': 33.5, 'area_kitchen': 11.4, 'area_live': 14.5, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png'},
  {'id': 120, 'floor': 4, 'pos_on_floor': 2, 'price': 5050000, 'rooms': 2, 'area_total': 64.8, 'area_kitchen': 19.2, 'area_live': 33, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png'},
  {'id': 121, 'floor': 4, 'pos_on_floor': 3, 'price': 3030000, 'rooms': 1, 'area_total': 36.5, 'area_kitchen': 11.7, 'area_live': 17.4, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png'},
  {'id': 122, 'floor': 4, 'pos_on_floor': 4, 'price': 3000000, 'rooms': 1, 'area_total': 35.8, 'area_kitchen': 15, 'area_live': 11.2, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png'},
  {'id': 123, 'floor': 4, 'pos_on_floor': 5, 'price': 5200000, 'rooms': 2, 'area_total': 66.6, 'area_kitchen': 18.5, 'area_live': 29.4, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png'},
  {'id': 124, 'floor': 4, 'pos_on_floor': 6, 'price': 6050000, 'rooms': 3, 'area_total': 85.3, 'area_kitchen': 16.6, 'area_live': 46.6, 'image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png'}
]

const flatsOnPage = 9
const pages = Math.ceil(flatsObj.length / flatsOnPage)

export function getFlats() {
  return flatsObj
}

export function getCountPages() {
  return pages;
}
