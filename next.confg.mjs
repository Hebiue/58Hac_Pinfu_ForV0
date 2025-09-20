/** @type {import('next').NextConfig} */
const nextConfig = {
    // GitHub Pages用に静的エクスポートを有効化
    output: 'export',


    // GitHub Pagesのサブディレクトリ対応（例: https://username.github.io/repo-name）
    basePath: '/58Hac_Pinfu_ForV0',
    assetPrefix: '/58Hac_Pinfu_ForV0',

    // イメージ最適化を無効化（静的エクスポートでは必要）
    images: {
        unoptimized: true,
    },

    // その他のオプション（必要に応じて追加）
    trailingSlash: true, // 末尾にスラッシュを付けることでリンク切れを防止
};