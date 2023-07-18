export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          author: string
          content: string
          created_at: string
          id: string
          post: string
        }
        Insert: {
          author: string
          content: string
          created_at?: string
          id: string
          post: string
        }
        Update: {
          author?: string
          content?: string
          created_at?: string
          id?: string
          post?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_author_fkey"
            columns: ["author"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_post_fkey"
            columns: ["post"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      post_likes: {
        Row: {
          created_at: string
          post: string
          user: string
        }
        Insert: {
          created_at?: string
          post: string
          user: string
        }
        Update: {
          created_at?: string
          post?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_likes_post_fkey"
            columns: ["post"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_likes_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          author: string
          created_at: string
          description: string
          id: string
          updated_at: string
        }
        Insert: {
          author: string
          created_at?: string
          description: string
          id?: string
          updated_at?: string
        }
        Update: {
          author?: string
          created_at?: string
          description?: string
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_fkey"
            columns: ["author"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      stories: {
        Row: {
          author: string
          created_at: string
          id: string
          is_highlighted: boolean
        }
        Insert: {
          author: string
          created_at?: string
          id: string
          is_highlighted?: boolean
        }
        Update: {
          author?: string
          created_at?: string
          id?: string
          is_highlighted?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "stories_author_fkey"
            columns: ["author"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_to_followee: {
        Row: {
          created_at: string
          followee: string
          id: string
          updated_at: string
          user: string
        }
        Insert: {
          created_at?: string
          followee: string
          id?: string
          updated_at?: string
          user: string
        }
        Update: {
          created_at?: string
          followee?: string
          id?: string
          updated_at?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_to_followee_followee_fkey"
            columns: ["followee"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_to_followee_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_to_follower: {
        Row: {
          created_at: string
          follower: string
          id: string
          updated_at: string
          user: string
        }
        Insert: {
          created_at?: string
          follower: string
          id?: string
          updated_at?: string
          user: string
        }
        Update: {
          created_at?: string
          follower?: string
          id?: string
          updated_at?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_to_follower_follower_fkey"
            columns: ["follower"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_to_follower_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_verified: boolean
          link: string | null
          name: string | null
          updated_at: string
          username: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id: string
          is_verified?: boolean
          link?: string | null
          name?: string | null
          updated_at?: string
          username: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_verified?: boolean
          link?: string | null
          name?: string | null
          updated_at?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
