// OSS 存储桶名称
export const BUCKET = 'cdu-blog-api'
// OSS 存储桶地域节点
export const REGION = 'oss-cn-chengdu'
// front前台顶部header栏菜单选项
export const tagsArr = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Tags',
    path: '/tags',
  },
  // {
  //   name: 'About',
  //   path: '/about',
  // },
]
// profile登录后个人资料菜单栏
export const profileArr = [
  // {
  //   id: 1,
  //   name: 'Dashboard',
  //   path: '/admin',
  // },
  {
    id: 2,
    name: 'Edit Profile',
    path: '/admin/profile',
  },
  {
    id: 3,
    name: 'Write a Post',
    path: '/admin/write',
  },
  {
    id: 4,
    name: 'All Posts',
    path: '/admin/all',
  },
  // {
  //   id: 4,
  //   name: 'Settings',
  //   path: '/admin/setting',
  // },
  {
    id: 5,
    name: 'Sign out',
  },
]
// admin后台菜单栏
export const menuArr = [
  // {
  //   id: 1,
  //   name: 'Dashboard',
  //   path: '/admin',
  //   svg: 'grid',
  // },
  {
    id: 2,
    name: 'Edit Profile',
    path: '/admin/profile',
    svg: 'user',
  },
  {
    id: 3,
    name: 'Write a Post',
    path: '/admin/write',
    svg: 'edit',
  },
  {
    id: 4,
    name: 'All Posts',
    path: '/admin/all',
    svg: 'book-open',
  },
  // {
  //   id: 5,
  //   name: 'Settings',
  //   path: '/admin/setting',
  //   svg: 'vector',
  // },
]
/**
 * 分类选项
 */
export const selectOptions = [
  {
    value: 'Technology',
    label: 'Technology',
  },
  {
    value: 'Open Source',
    label: 'Open Source',
    // disabled: true,
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
  {
    value: 'Minimalism',
    label: 'Minimalism',
  },
  {
    value: 'Self-help',
    label: 'Self-help',
  },
  {
    value: 'Animals',
    label: 'Animals',
  },
  {
    value: 'Herbivores',
    label: 'Herbivores',
  },
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'PHP',
    label: 'PHP',
  },
  {
    value: 'Web Technologies',
    label: 'Web Technologies',
  },
  {
    value: 'Career',
    label: 'Career',
  },
  {
    value: 'Life',
    label: 'Life',
  },
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'Spirituality',
    label: 'Spirituality',
  },
  {
    value: 'Food',
    label: 'Food',
  },
  {
    value: 'Cooking',
    label: 'Cooking',
  },
  {
    value: 'Sports',
    label: 'Sports',
  },
  {
    value: 'Racing',
    label: 'Racing',
  },
  {
    value: 'Mountain Hiking',
    label: 'Mountain Hiking',
  },
  {
    value: 'Cruising',
    label: 'Cruising',
  },
]
