export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      ai_leads: {
        Row: {
          additional_info: string | null
          comments: string | null
          company_name: string | null
          email: string
          first_name: string
          form_tag: string
          id: string
          job_title: string | null
          last_name: string
          phone: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email: string
          first_name: string
          form_tag: string
          id?: string
          job_title?: string | null
          last_name: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name?: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      ai_voice: {
        Row: {
          additional_info: string | null
          comments: string | null
          company_name: string | null
          email: string
          first_name: string
          form_tag: string
          id: string
          job_title: string | null
          last_name: string
          phone: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email: string
          first_name: string
          form_tag: string
          id?: string
          job_title?: string | null
          last_name: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name?: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      "ai-agents": {
        Row: {
          additional_info: string | null
          comments: string | null
          company_name: string | null
          email: string
          first_name: string
          form_tag: string
          id: string
          job_title: string | null
          last_name: string
          phone: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email: string
          first_name: string
          form_tag: string
          id?: string
          job_title?: string | null
          last_name: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name?: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      assessment_results: {
        Row: {
          additional_info: string | null
          assessment_answers: Json
          company_name: string | null
          domain_scores: Json
          id: string
          maturity_level: string | null
          overall_score: number
          phone: string | null
          submitted_at: string
          updated_at: string
          user_email: string
          user_name: string
        }
        Insert: {
          additional_info?: string | null
          assessment_answers: Json
          company_name?: string | null
          domain_scores: Json
          id?: string
          maturity_level?: string | null
          overall_score: number
          phone?: string | null
          submitted_at?: string
          updated_at?: string
          user_email: string
          user_name: string
        }
        Update: {
          additional_info?: string | null
          assessment_answers?: Json
          company_name?: string | null
          domain_scores?: Json
          id?: string
          maturity_level?: string | null
          overall_score?: number
          phone?: string | null
          submitted_at?: string
          updated_at?: string
          user_email?: string
          user_name?: string
        }
        Relationships: []
      }
      "e-commerce": {
        Row: {
          email: string
          first_name: string
          id: string
          last_name: string
          mobile: string | null
          monthly_sales: string | null
          patent_status: string | null
          product_niche: string
          sales_channels: string[] | null
          sku_count: string | null
          submitted_at: string
          unique_features: string | null
          updated_at: string
        }
        Insert: {
          email: string
          first_name: string
          id?: string
          last_name: string
          mobile?: string | null
          monthly_sales?: string | null
          patent_status?: string | null
          product_niche: string
          sales_channels?: string[] | null
          sku_count?: string | null
          submitted_at?: string
          unique_features?: string | null
          updated_at?: string
        }
        Update: {
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          mobile?: string | null
          monthly_sales?: string | null
          patent_status?: string | null
          product_niche?: string
          sales_channels?: string[] | null
          sku_count?: string | null
          submitted_at?: string
          unique_features?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ecommerce_leads: {
        Row: {
          additional_info: string | null
          biggest_challenge: string | null
          company_name: string | null
          email: string
          first_name: string
          goals: string | null
          id: string
          last_name: string
          marketing_budget: string | null
          phone: string | null
          product_niche: string
          sales_channels: string[] | null
          sales_volume: string
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          biggest_challenge?: string | null
          company_name?: string | null
          email: string
          first_name: string
          goals?: string | null
          id?: string
          last_name: string
          marketing_budget?: string | null
          phone?: string | null
          product_niche: string
          sales_channels?: string[] | null
          sales_volume: string
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          biggest_challenge?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          goals?: string | null
          id?: string
          last_name?: string
          marketing_budget?: string | null
          phone?: string | null
          product_niche?: string
          sales_channels?: string[] | null
          sales_volume?: string
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      "home-page-info": {
        Row: {
          additional_info: string | null
          comments: string | null
          company_name: string | null
          email: string
          first_name: string
          form_tag: string
          id: string
          job_title: string | null
          last_name: string
          phone: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email: string
          first_name: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name?: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      "SFA-list": {
        Row: {
          additional_info: string | null
          comments: string | null
          company_name: string | null
          email: string
          first_name: string
          form_tag: string
          id: string
          job_title: string | null
          last_name: string
          phone: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email: string
          first_name: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name?: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      social_content: {
        Row: {
          additional_info: string | null
          comments: string | null
          company_name: string | null
          email: string
          first_name: string
          form_tag: string
          id: string
          job_title: string | null
          last_name: string
          phone: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email: string
          first_name: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name?: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      training: {
        Row: {
          additional_info: string | null
          comments: string | null
          company_name: string | null
          email: string
          first_name: string
          form_tag: string
          id: string
          job_title: string | null
          last_name: string
          phone: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email: string
          first_name: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name?: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      "vibe-coding": {
        Row: {
          additional_info: string | null
          comments: string | null
          company_name: string | null
          email: string
          first_name: string
          form_tag: string
          id: string
          job_title: string | null
          last_name: string
          phone: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email: string
          first_name: string
          form_tag: string
          id?: string
          job_title?: string | null
          last_name: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          comments?: string | null
          company_name?: string | null
          email?: string
          first_name?: string
          form_tag?: string
          id?: string
          job_title?: string | null
          last_name?: string
          phone?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
