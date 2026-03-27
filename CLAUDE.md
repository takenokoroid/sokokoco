# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Sokokoco — 人の人生を読めるWebサイト。Markdownで書かれた人生の物語を静的サイトとして配信する。

## Commands

- `pnpm dev` — 開発サーバー起動
- `pnpm build` — 静的ビルド（`output: "export"` による SSG）
- `pnpm lint` — ESLint実行
- `pnpm commit` — czg emoji によるコミット

## Architecture

- **Next.js 16 (App Router)** + SSG (`output: "export"`)
- コンテンツは `content/lives/` 配下の Markdown ファイル（gray-matter でfrontmatter解析、unified + remark で HTML 変換）
- `app/page.tsx` がサーバーコンポーネントとして Markdown を読み込み描画
- Tailwind CSS v4（`@tailwindcss/postcss` 経由）
- パスエイリアス: `@/*` → プロジェクトルート

## Conventions

- 言語: 日本語（`<html lang="ja">`）
- DB・CMS・API なし。コンテンツはリポジトリ内の Markdown で管理
- デプロイ先: Vercel
