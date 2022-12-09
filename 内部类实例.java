public class Main

{

	public static void main(String[] args)	{

		/*

		 内部类

		 333

		 222

		 111

		*/

	  AA a=new AA();

	  AA.BB b=a.new BB();

	  b.mb(333);

	}

}

class AA{

	private int s=111;

	public class BB{

		private int s=222;

		public void mb(int s){

			System.out.println(s);//局部变量

			System.out.println(this.s);//内部类对象的属性

			System.out.println(AA.this.s);//外层类对象属性

		}

	}

}
