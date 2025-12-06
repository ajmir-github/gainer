# 📘 Database Schema – Twitter-like Social Platform

## Overview

This repository contains the **Prisma ORM schema** for a Twitter-like social media application backed by **PostgreSQL**.  
The schema is designed with **functional simplicity** and covers core social features: users, tweets, media attachments, likes, followers, notifications, and hashtags.

---

## 🎯 Key Models

### 👤 User

- Fields: `id`, `username`, `email`, `password`, `name`, `bio`, `role`, timestamps.
- Relations:
  - `tweets`: authored tweets
  - `likes`: tweets liked
  - `followers` / `following`: self-relation for social graph
  - `notificationsReceived` / `notificationsSent`: notifications system
  - `avatar`: one-to-one relation with `Media`

### 📝 Tweet

- Fields: `id`, `content` (max 280 chars), timestamps.
- Relations:
  - `author`: user who posted
  - `media`: attached images/videos/GIFs
  - `likes`: users who liked
  - `replies` / `parent`: threaded conversations
  - `notifications`: alerts tied to this tweet
  - `hashtags`: stored as `String[]` for simplicity

### 🎨 Media

- Fields: `id`, `url`, `type` (`IMAGE`, `VIDEO`, `GIF`), `altText`, timestamps.
- Relations:
  - `tweet`: optional attachment
  - `user`: optional avatar

### ❤️ Like

- Connects `User` and `Tweet`.
- Unique constraint prevents duplicate likes.

### 👥 Follower

- Connects two users (follower → following).
- Unique constraint prevents duplicate follows.

### 🔔 Notification

- Fields: `id`, `type` (`LIKE`, `FOLLOW`, `REPLY`, `MENTION`), `message`, `read`, timestamps.
- Relations:
  - `recipient`: user receiving the notification
  - `actor`: user triggering the action
  - `tweet`: optional link to tweet

---

## 🔑 Design Principles

- **Functional Simplicity**: Only essential fields and relations, no premature optimization.
- **Cascade Deletes**: Child records automatically removed when parent records are deleted.
- **Unique Constraints**: Prevent duplicate likes and follows.
- **Extensibility**: Easy to add retweets, quote tweets, or trending hashtags later.

---
